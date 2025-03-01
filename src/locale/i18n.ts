import type { I18nOptions } from 'vue-i18n'

const options: I18nOptions = {
  legacy: false,
  locale: navigator.language,
  messages: {
    en: {
      hello: 'Hi there!',
      intro: "I'm Victor, nice to meet you 👋",
      whoami:
        ' I help architects and engineers design buildings using the next generation tools for architectural design. I am currently based in Copenhagen working with a global team at {perkinswill} and {shl}.',
      journey:
        'I started my design technology journey through Computational Design using Rhino and Grasshopper around 2018. Since then I have transitioned to web development and building extensions to Rhino and Revit.',
      references:
        'You can check some of my public work at {github}, or follow me on {linkedin}, where I post about design technology in the AEC industry',
    },
    'pt-BR': {
      hello: 'Olá!',
      intro: 'Eu sou Victor, muito prazer 👋',
      whoami:
        'Eu ajudo arquitetos e engenheiros a projetar edifícios usando as ferramentas de design arquitetônico da próxima geração. Atualmente moro em Copenhague trabalhando com uma equipe global na {perkinswill} e {shl}.',
      journey:
        'Comecei minha jornada em tecnologia de design através do Design Computacional usando Rhino e Grasshopper por volta de 2018. Desde então, fiz a transição para o desenvolvimento web e a construção de extensões para Rhino e Revit.',
      references:
        'Você pode conferir alguns dos meus trabalhos públicos no {github}, ou me seguir no {linkedin}, onde posto sobre tecnologia de design na indústria AEC',
    },
  },
}

export default options
