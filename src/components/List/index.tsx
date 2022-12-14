import { Container } from "./styles";
import {MdAdd} from "react-icons/md"
import { I_LIST_PROPS } from "./types";

import {Card} from '../Card'

export function List({data}:I_LIST_PROPS){
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        
        {
          data.creatable && (
            <button type="button">
              <MdAdd size={24} color="#FFF"/>
            </button>
          )
        }
      </header>

      <ul>
       {
        data.cards.map(card => <Card key={card.id} data={card}/>)
       }
      </ul>
    </Container>
  )
}