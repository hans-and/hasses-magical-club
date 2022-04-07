import React from 'react';
import { Layout, Menu, Breadcrumb, Button, Radio } from 'antd';
import { observer } from "mobx-react";
import { action, observable, makeObservable} from "mobx";
import { TopView } from './components/top';
import { IMagicBtnModel } from './components/magic/magicButton';
import { BlogView } from './components/mainContents/blog/blog';
import { BusView } from './components/mainContents/bus/bus';
import { GamesView } from './components/mainContents/games/games';
import { LoginView } from './components/mainContents/login/login';
import { UtilsView } from './components/mainContents/utils/utils';
const { Header, Footer, Sider, Content } = Layout;
@observer
export class App extends React.Component<any, any> {


    @observable
    private selectedMenu: string = "bus";

    @observable
    private size: string = "large";

    @action
    private onSelectTopMenu(select: string) {
        console.log(select);
        this.selectedMenu = select;
    }


    constructor(props: any, context: any) {
        super(props, context);
        makeObservable(this);

        this.onSelectTopMenu = this.onSelectTopMenu.bind(this);
    }

    handleSizeChange(val: any) {
        console.log(val);
    };

    render() {

        const buttons: IMagicBtnModel[] = [
            {
                "caption": "Programerings utensilier",
                "value": "utils"
            },
            {
                "caption": "Bussen",
                "value": "bus"
            },
            {
                "caption": "Logga in",
                "value": "login"
            },
            {
                "caption": "Kul och spel",
                "value": "games"
            },
            {
                "caption": "Blog",
                "value": "blog"
            }
        ];


        return (
            <Layout>

                <Header >
                    <TopView onSelect={this.onSelectTopMenu}
                             buttons={buttons}/>
                </Header>

                <Content className="site-layout-outer-content">
                    <div className="site-layout-content">
                        {this.renderContent()}
                    </div>
                </Content>
            </Layout>
        );
    }

    renderContent() {
        switch (this.selectedMenu) {
        case "utils":
            return (<UtilsView name={this.selectedMenu}/>);
        case "bus":
            return (<BusView name={this.selectedMenu}/>);
        case "login":
            return (<LoginView name={this.selectedMenu}/>);
        case "games":
            return (<GamesView name={this.selectedMenu}/>);
        case "blog":
            return (<BlogView name={this.selectedMenu}/>);
        default:
            return '';


        }
    }
}

