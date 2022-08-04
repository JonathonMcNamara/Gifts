import { ProxyState } from "../AppState.js"
import { sandboxApi } from "./AxiosService.js"
import { Gift } from "../Models/Gift.js"


export class GiftsService {
    async getGifts(){
    const res = await sandboxApi.get('/gifts')
    console.log(res.data)
    ProxyState.gifts = res.data.map(g => new Gift(g))
    }
}


export const giftsService = new GiftsService()