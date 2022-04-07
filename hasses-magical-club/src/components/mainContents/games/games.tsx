import React from 'react';
export interface IViewProps {
    name:string;
}


export class GamesView extends React.Component<IViewProps, any> {

    constructor(props: IViewProps) {
        super(props);
    }
    render(): JSX.Element {
        return (
            <div >
                <h1>{this.props.name}</h1>
            </div>
        );
    }
}