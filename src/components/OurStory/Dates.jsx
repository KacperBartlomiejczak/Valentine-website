export default function Dates({date, dateDescription,  img, className}){
    return (
        <div className="dates">
            <p className="date">{date}</p>
            <p className="date-description">{dateDescription}</p>
            <div className="date-line"></div>
            <img className='date-img' src={img} alt="Bella and me" />
        </div>
    )
}