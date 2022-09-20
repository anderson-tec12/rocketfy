import { I_CARD_ITEM_PROPD } from "../List/types";
import { Container, Label } from "./styles";

interface I_PROPS {
  data: I_CARD_ITEM_PROPD
}
export function Card({data}:I_PROPS){
  return (
    <Container>
        <header>
          {
            data.labels.map(label => (
              <Label key={label} color={label} />
            ))
          }
        </header>

        <p>
         {data.content}
        </p>

        {
          data.user && <img src={data.user} alt="" />
        }
    </Container>
  )
}