import React from 'react';
import { MagicButton, IMagicBtnModel } from "./magic/magicButton";
export interface IViewProps {
    onSelect: (section: string) => void;
    buttons: IMagicBtnModel[];
}


export class TopView extends React.Component<IViewProps, any> {

    constructor(props: IViewProps) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    private onSelect(selected: string) {
        this.props.onSelect(selected);
    }

    render(): JSX.Element {
        return (
            <div >
                {this.props.buttons.map((bm) => (
                    <MagicButton
                        key={bm.value}
                        onPress={this.onSelect}
                        caption={bm.caption}
                        value={bm.value}
                    />
                ))}
            </div>
        );
    }
}
