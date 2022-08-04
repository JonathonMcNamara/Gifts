import { Pop } from "../Utils/Pop.js"
import { giftsService } from '../Services/GiftsService.js'
import { ProxyState } from "../AppState.js"


export class GiftsController{
    constructor(){
        console.log('Gift Controller laoded')
        this.getGifts()
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