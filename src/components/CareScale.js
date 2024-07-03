<CareScale scaleValue={plant.light} />

function CareScale(props) {
    const scaleValue = props.value

    const range = [1, 2, 3]

    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null
            )}
        </div>
    )
}



const {scaleValue, careType} = props
