
export default function Title({ children, as }) {
    const Tag = as;
    return (
        <div >
            <Tag>{children}</Tag>
        </div>
    );
}
