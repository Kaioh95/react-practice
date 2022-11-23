import { UlMenu } from "./styles"
import MenuItem from "./MenuItem"
import MenuTree from "./MenuTree"

export default function Menu(){
    
    return(
        <UlMenu>
            <MenuItem path="/" label='DashBoard' icon="dashboard"/>
            <MenuTree label="Cadastro" icon="edit">
                <MenuItem path="/billingCycles" label='Ciclos de Pagamentos' icon="usd"/>
            </MenuTree>
        </UlMenu>
    )
}