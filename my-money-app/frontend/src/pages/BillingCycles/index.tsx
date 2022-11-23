import Content from "../../components/Content";
import ContentHeader from "../../components/ContentHeader";
import { MainDiv } from "./styles";
import Tabs from "../../components/Tab/Tabs";
import TabsHeader from "../../components/Tab/TabsHeader";
import TabsContent from "../../components/Tab/TabsContent";
import TabHeader from "../../components/Tab/TabsHeader/TabHeader";
import TabContent from "../../components/Tab/TabsContent/TabContent";
import { useContext, useEffect } from "react";
import { TabContext } from "../../contexts/TabContext";
import BillingCycleList from "../../components/BillingCycleList";

export default function BillingCycles(){
    const tabContext = useContext(TabContext)
    const { selectTab, showTabs } = tabContext

    useEffect(() => {
        selectTab?.('tabList')
        showTabs?.('tabList', 'tabCreate')
    }, [])

    return(
        <MainDiv>
            <ContentHeader title="Ciclos de Pagamentos" small="Cadastro"/>
            <Content>
                <Tabs>
                    <TabsHeader>
                        <TabHeader label="listar" icon="bars" target="tabList"/>
                        <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                        <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                        <TabHeader label="excluir" icon="trash-o" target="tabDelete"/>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <BillingCycleList/>
                        </TabContent>
                        <TabContent id="tabCreate"><h1>Incluir</h1></TabContent>
                        <TabContent id="tabUpdate"><h1>Alterar</h1></TabContent>
                        <TabContent id="tabDelete"><h1>Excluir</h1></TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </MainDiv>
    )
}