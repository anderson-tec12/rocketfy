export interface I_LIST_PROPS {
 data:{
  title:string;
  creatable:boolean;
  cards:I_CARD_ITEM_PROPD[],
  done?:boolean;
 }
}


export interface I_CARD_ITEM_PROPD{
  id: number;
  content: string,
  labels: string[],
  user?: string
}