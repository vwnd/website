import { Extension, ObjectLayers, type IViewer } from '@speckle/viewer';
import { Box3, Vector3 } from 'three';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export class Labelling extends Extension {
  private labelRenderer: CSS2DRenderer;
  private container: HTMLElement;
  private earthLabel: CSS2DObject | null = null;

  constructor(viewer: IViewer) {
    super(viewer);

    this.container = this.viewer.getContainer();

    this.labelRenderer = new CSS2DRenderer();
    this.labelRenderer.setSize(this.container.clientWidth, this.container.clientHeight); // shouldnt it be the canvas size?
    this.labelRenderer.domElement.style.position = 'absolute';
    this.labelRenderer.domElement.style.top = '0';
    this.labelRenderer.domElement.style.pointerEvents = 'none';
    this.container.appendChild(this.labelRenderer.domElement);
  }

  public labelObjectArea(id: string) {
    const box: Box3 = new Box3();
    const rvs = this.viewer.getWorldTree().getRenderTree().getRenderViewsForNodeId(id);
    rvs?.forEach((rv) => {
      box.union(rv.aabb);
    });
    this.addLabel('45 m2', box.getCenter(new Vector3()));
  }

  private addLabel(text: string, location: Vector3) {
    const earthDiv = document.createElement('div');
    earthDiv.className = 'text-white bg-black rounded-md p-2 text-sm';
    earthDiv.textContent = text;
    const earthLabel = new CSS2DObject(earthDiv);
    this.earthLabel = earthLabel;
    earthLabel.position.copy(location);
    earthLabel.layers.set(ObjectLayers.OVERLAY);
    this.viewer.getRenderer().scene.add(earthLabel);
  }

  public onRender() {
    this.labelRenderer.render(
      this.viewer.getRenderer().scene,
      this.viewer.getRenderer().renderingCamera!,
    );
  }

  public onResize() {
    this.labelRenderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  public cleanLabels() {
    if (this.earthLabel) {
      this.viewer.getRenderer().scene.remove(this.earthLabel);
    }
  }
}
