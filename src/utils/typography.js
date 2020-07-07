import Typography from "typography"
import gray from "gray-percentage"

import colors from "src/static/colors"

const typography = new Typography({
    googleFonts: [
        {
            name: "DM Sans",
            styles: ["400", "400i", "500", "500i"],
        }
    ],
    headerFontFamily: ["DM Sans", "Noto Sans", "sans-serif"],
    bodyFontFamily: ["DM Sans", "Noto Sans", "sans-serif"],
    headerWeight: "500",
    bodyWeight: 400,
    boldWeight: 500,
    overrideStyles: ({ rhythm }) => {
        const styles = {
            a: {
                color: colors.dark_blue,
                textDecoration: "none",
            },
            "a:hover": {
                opacity: "75%",
            },
            blockquote: {                
                color: gray(41),
                marginLeft: rhythm(1 / 6),
                paddingLeft: rhythm(6 / 9),
                borderLeft: `${rhythm(1 / 9)} solid ${colors.dark_blue}`,
            },
        }
        return styles
    }
})

export default typography