/* eslint-disable react/prop-types */
const House = ({house}) => {
    const {name, houseColours, founder, animal} = house;
    const colors = houseColours.split(' ')
    const isColorPredefined = (color)=>{
        const span = document.createElement('span')
        span.style.color = color

        return span.style.color !== ""
    }
    return (
        <div className="shadow-md space-y-1 rounded-md py-2 border px-3 my-3">
            <div className="flex justify-between">
                <h3 className="text-xl font-bold">{name}</h3>
                <span>{animal}</span>
            </div>
            {isColorPredefined(colors[0]) && isColorPredefined(colors[2])?
                <div style={{background: `linear-gradient(to right, ${colors[0]}, ${colors[2]})` }} className="h-5 rounded"></div>
				:
                <div style={{background: 'linear-gradient(to right, white, black)'}} className="h-5 rounded"></div>

            }
            <h3 className="text-left">Founder: <span className="font-bold">{founder}</span></h3>
        </div>
    );
};

export default House;