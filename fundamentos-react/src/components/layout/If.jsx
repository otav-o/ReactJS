// não precisa importar o React pois não há trecho jsx

export default function (props) {
    if (props.test) {
        return props.chidren
    } else {
        return false
    }
}