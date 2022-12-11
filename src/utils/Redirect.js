const Redirect = ({ pageContext }) => (
  <meta http-equiv="Refresh" content={`0; url='${pageContext.to}'`} />
)

export default Redirect
