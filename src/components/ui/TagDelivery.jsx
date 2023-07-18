function TagDelivery({ text, backgroundColor, color, display }) {
    return (
        <div
            className="tags display_tag_item"
            style={{
                backgroundColor: backgroundColor,
                color: color,
                fontSize: 10,
                padding: 4,
                borderRadius: 2,
                width: 'fit-content',
                position: 'relative',
                height: 12,
                display: display,
                marginRight: 4,
                alignItems: 'center',
                lineHeight: 1,
            }}
        >
            <div className="tag_icon"></div>
            <span style={{ fontSize: 10, color: color }}>{text}</span>
        </div>
    );
}
export default TagDelivery;
// backgroundColor: '#F4F4F4',
// color: '#828B9D',
