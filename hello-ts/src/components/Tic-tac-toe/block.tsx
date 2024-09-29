import React from "react";

interface BlockProps{
    value?: String | null;
    onClick?: () => void;
}
const Block: React.FC<BlockProps> = (props) => {
    return( 
    <div className="block" onClick={props.onClick}>{props.value}</div>
)
};

export default Block;