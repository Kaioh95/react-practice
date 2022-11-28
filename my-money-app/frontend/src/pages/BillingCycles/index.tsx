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
import BillingCycleForm from "../../components/forms/BillingCycleForm";
import { BillingCyclesContext } from "../../contexts/BillingCyclesContext";

export default function BillingCycles(){
    const tabContext = useContext(TabContext)
    const bcContext = useContext(BillingCyclesContext)
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
                        <TabHeader label="Listar" icon="bars" target="tabList"/>
                        <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                        <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                        <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                    </TabsHeader>
                    <TabsContent>
                        <TabContent id="tabList">
                            <BillingCycleList/>
                        </TabContent>
                        <TabContent id="tabCreate">
                            <BillingCycleForm method={bcContext.create}
                                submitClass="primary" submitLabel="Submit"/>
                        </TabContent>
                        <TabContent id="tabUpdate">
                            <BillingCycleForm method={bcContext.update}
                                submitClass="info" submitLabel="Update"/>
                        </TabContent>
                        <TabContent id="tabDelete">
                            <BillingCycleForm method={bcContext.remove}
                                readOnly submitClass="danger" submitLabel="Delete"/>
                        </TabContent>
                    </TabsContent>
                </Tabs>
            </Content>
        </MainDiv>
    )
}