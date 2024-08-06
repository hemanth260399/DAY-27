export const Loader = () => {
    return (
        <div style={{
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            width: "100%",
            height: "100%",
            color: "red"
        }}>
            <i className="fa-brands fa-cloudsmith fa-4x fa-spin"></i>
            <h4 className="ml-4">Loading Please Wait ....</h4>
        </div>
    )
}