import React from "react";
import './buttonStyle.css'


export interface IViewProps {
    onPress: (value: string) => void;
    caption:string;
    value:string;
}

export interface IMagicBtnModel {
    caption:string;
    value:string;
}

export class MagicButton extends React.Component<IViewProps, any> {
    private caption: string = "";
    private value: string = "";
    
    constructor(props: IViewProps) {
        super(props);
        this.caption = props.caption;
        this.value = props.value;
        this.onClick = this.onClick.bind(this);
    }
   
    private onClick() {
        this.props.onPress(this.value);
    }

    render(): JSX.Element {
        
        return (
                <button className="TopMenuButton" onClick={this.onClick}>{this.caption}</button>
        );
    }

}
