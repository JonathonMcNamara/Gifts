

export class Gift{
    constructor(data){
        this.url = data.url,
        this.name = data.name,
        this.opened = data.opened
    }

    get Template(){
        return `
    
        <div class="col-md-4 card elevation-2 selectable no-select my-3">
        <img  src="${this.url}" alt="">
        </div>
    
        `
    }
}