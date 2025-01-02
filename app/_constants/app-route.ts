


export const APP_ROUTE = {

  public: {
    home: {
      path: "/",
      name: "Início"
    },
    world: {
      path:"/news/world",
      name:"Mundo",
      description: `Veja o que está em alta nas novidades sobre o mundo, interagindo com as notícias em destaque dessa categoria. Aqui podes ficar a par das últimas novidades e muito mais.`
    },
    techs: {
      path: "/news/techs",
      name: "Tecnologia",
      description: `Veja o que está em alta nas novidades sobre tecnologia, interagindo com as notícias em destaque dessa categoria. Aqui podes ficar a par das últimas novidades e muito mais.`
    },
    insider: {
      path: "/news/insider",
      name: "Interno",
      description: `Veja o que está em alta nas novidades sobre o nosso país, interagindo com as notícias em destaque dessa categoria. Aqui podes ficar a par das últimas novidades e muito mais.`
    },
    trend: {
      path: "/news/trend",
      name: "Mais vistos",
      description: `Veja o que está em alta nas novidades sobre as últimas tendencias da geração Z, interagindo com as notícias em destaque dessa categoria. Aqui podes ficar a par das últimas novidades e muito mais.`
    },
    view: {
      path: "/view", //view by id
      name: "Visualização da notícia"
    }

  }
}