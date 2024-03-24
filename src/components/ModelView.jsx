import { View } from "@react-three/drei"

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationSate, item, size }) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`border-2 border-red-500 w-full h-full ${index == 2} ? 'right-[100%]' : ''`}
        >

        </View>
    )
}

export default ModelView