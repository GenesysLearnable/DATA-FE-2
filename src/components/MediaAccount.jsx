

const MediaAccount = ({ src, onSelect, name, selected }) => {
    function handleClick() {
        onSelect(name)
    }

  return (
      <>
          <div className="box">
              <img src={src} alt="" className={`media-img ${selected ? 'selected' : ''}`} />
          </div>
      </>
  )
}

export default MediaAccount