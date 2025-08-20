import { aleatorio, afirmacoes } from "./aleatorio.js";

export const perguntas = {
  inicio: {
    texto: "Você acorda em uma floresta misteriosa. Três caminhos se apresentam. Qual seguir?",
    opcoes: {
      "Trilha iluminada": "trilha",
      "Caverna escura": "caverna",
      "Floresta densa": "floresta"
    }
  },
  trilha: {
    texto: "A trilha leva a uma vila antiga. Os moradores parecem desconfiados.",
    opcoes: {
      "Conversar com os moradores": "vila",
      "Seguir sem interagir": "selva",
      "Observar de longe": "espiar"
    }
  },
  caverna: {
    texto: "Dentro da caverna, há uma tocha no chão e sons estranhos ecoando.",
    opcoes: {
      "Acender a tocha": "tocha",
      "Seguir no escuro": "escuro",
      "Voltar": "inicio"
    }
  },
  floresta: {
    texto: "A floresta tem ruídos misteriosos. Algo se move entre as árvores.",
    opcoes: {
      "Investigar": "criatura",
      "Seguir em frente": "selva",
      "Subir em uma árvore": "arvore"
    }
  },
  vila: {
    texto: "Os moradores falam sobre um artefato protegido por enigmas.",
    opcoes: {
      "Pedir ajuda": "ajuda",
      "Tentar sozinho": "enigmas",
      "Desistir": "final_desistir"
    }
  },
  espiar: {
    texto: "Você vê que eles guardam mapas secretos.",
    opcoes: {
      "Roubar mapa": "mapa",
      "Tentar amizade": "vila",
      "Voltar": "trilha"
    }
  },
  selva: {
    texto: "Animais bloqueiam o caminho.",
    opcoes: {
      "Tentar passar": "passagem",
      "Fugir": "fuga",
      "Enfrentar": "final_morte"
    }
  },
  tocha: {
    texto: "As inscrições dizem: 'Coragem guia, sabedoria salva'.",
    opcoes: {
      "Seguir com a tocha": "profundo",
      "Apagar tocha": "escuro",
      "Decifrar inscrições": "inscricoes"
    }
  },
  escuro: {
    texto: "Você tropeça e cai em um buraco profundo.",
    opcoes: {
      "Aceitar destino": "final_morte",
      "Gritar por socorro": "final_salvo"
    }
  },
  criatura: {
    texto: "Uma criatura estranha aparece.",
    opcoes: {
      "Lutar": "final_morte",
      "Oferecer comida": "amizade",
      "Fugir": "selva"
    }
  },
  amizade: {
    texto: "A criatura se torna aliada e guia você até o artefato.",
    opcoes: {
      "Pegar artefato": "final_vitoria",
      "Deixar artefato": "final_sabedoria"
    }
  },
  arvore: {
    texto: "Do alto, você vê um caminho secreto até uma caverna iluminada.",
    opcoes: {
      "Seguir para caverna": "caverna",
      "Descer e seguir floresta": "selva"
    }
  },
  ajuda: {
    texto: "Os moradores revelam um atalho seguro.",
    opcoes: {
      "Seguir atalho": "profundo",
      "Agradecer e ir embora": "final_sabedoria"
    }
  },
  enigmas: {
    texto: "Você resolve os enigmas e chega ao artefato.",
    opcoes: {
      "Pegar artefato": "final_vitoria",
      "Destruir artefato": "final_sabedoria"
    }
  },
  inscricoes: {
    texto: "Aviso: 'Somente os dignos serão recompensados'.",
    opcoes: {
      "Continuar": "profundo",
      "Ignorar aviso": "final_maldicao"
    }
  },
  passagem: {
    texto: "Você atravessa sem ferimentos e encontra um rio.",
    opcoes: {
      "Atravessar ponte": "profundo",
      "Contornar rio": "selva"
    }
  },
  fuga: {
    texto: "Você corre e encontra uma cabana abandonada.",
    opcoes: {
      "Entrar na cabana": "cabana",
      "Seguir sem parar": "selva"
    }
  },
  cabana: {
    texto: "Dentro da cabana, encontra pistas sobre o artefato.",
    opcoes: {
      "Seguir pistas": "profundo",
      "Ignorar e descansar": "final_salvo"
    }
  },
  profundo: {
    texto: "Você chega ao local do artefato.",
    opcoes: {
      "Pegar artefato": "final_vitoria",
      "Observar de longe": "final_sabedoria",
      "Destruir pedestal": "final_maldicao"
    }
  },

  // FINAIS
  final_vitoria: {
    texto: "🎉 Você conquistou o artefato! " + aleatorio(afirmacoes),
    opcoes: {}
  },
  final_sabedoria: {
    texto: "🧘 Você escolheu a sabedoria sobre a ambição.",
    opcoes: {}
  },
  final_maldicao: {
    texto: "💀 Ignorar os avisos trouxe uma maldição eterna.",
    opcoes: {}
  },
  final_morte: {
    texto: "☠️ Sua jornada terminou de forma trágica.",
    opcoes: {}
  },
  final_desistir: {
    texto: "🚪 Você desistiu da missão e voltou para casa sem glória.",
    opcoes: {}
  },
  final_salvo: {
    texto: "🙌 Alguém ouviu seus gritos e salvou sua vida, mas a missão ficou incompleta.",
    opcoes: {}
  }
};
