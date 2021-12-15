


/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data. */
Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            text: 'Salve, benvenuto in Vue JS',
            /* BONUS:
            Aggiungere alla pagina un’immagine, presa anch’essa da un data. */
            image: 'https://www.laramind.com/blog/wp-content/uploads/2019/09/Untitled-design-2019-09-03T162841.927-600x315.png'
        }
    }
)
