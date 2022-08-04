import { Pop } from "../Utils/Pop.js"
import { giftsService } from '../Services/GiftsService.js'
import { ProxyState } from "../AppState.js"

function _drawGifts() {
    let template = ''
    ProxyState.gifts.forEach(g=> template+= g.Template)
    document.getElementById('gifts').innerHTML = template
}


export class GiftsController{
    constructor(){
        console.log('Gift Controller laoded')
        this.getGifts()
        _drawGifts()
        ProxyState.on('gifts',_drawGifts)
    }

   async getGifts(){
        try {
        await giftsService.getGifts()    
        } catch (error) {
          console.error('[Getting Gifts]', error)
          Pop.error(error)
        }
    }
}