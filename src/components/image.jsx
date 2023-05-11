export function Image({ src, title, unsaturated }) {
    const imageStyle = unsaturated ? { filter: "grayscale(100%)" } : {};

    return (
        <div className={"picturee"} >
            <img src={src} alt={title} style={imageStyle} />
            <span className={"titlee"}>{title}</span>
        </div>
    );
}
