import { Extension, type IViewer } from '@speckle/viewer';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

export class Labelling extends Extension {
  private labelRenderer: CSS2DRenderer;

  constructor(viewer: IViewer) {
    super(viewer);

    this.labelRenderer = new CSS2DRenderer();
  }
}
