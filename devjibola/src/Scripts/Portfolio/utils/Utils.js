import { useTheme } from "../contexts/ThemeContext";

export const TextColorPicker = (color) => {
    const {theme} = useTheme()
    //put the context
    // let any_variants = null;
    //we can modify and return any_variants finally
    if(color){
        return color
    }
    else if(theme.darkMode){
        return '#fff'
    }
    else{
        return '#000'
    }

}

export const BorderColorPicker = (color) => {
    const {theme} = useTheme()
    // let any_variants = null;
    //we can modify and return any_variants finally
    if(color){
        return color
    }
    else if(theme.darkMode){
        return '#dadada'
    }
    else{
        return '#2b3031'
    }
}

export const BackgroundColorPicker = (color) => {
    const {theme} = useTheme()
    // let any_variants = null;
    //we can modify and return any_variants finally
    if(color){
        return color
    }
    else if(theme.darkMode){
        return '#131415'
    }
    else{
        return '#f9fafb'
    }
}

export const themePickers = (otherStyles) => {
    //will provide the styles based on darkTheme or not
    //but also permit the addition of additional styles
    return {
        color: TextColorPicker(),
        backgroundColor: BackgroundColorPicker(),
        borderColor: BorderColorPicker(),
        ...otherStyles
        //otherStyles will overwrite the rest elements if provided
        //but we must provide an object as themePickers parameter if any
    }
}

