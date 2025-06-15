const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }
    
    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    return (
        <div className="flex items-center justify-center px-2 py-4 gap-4 text-[#eeeeee] text-2xl">
            <button 
                onClick={handlePrevPage} 
                disabled={page <= 1}// untuk menonaktifkan (disable) tombol next jika sudah sampai page paling awal (pertama)
                className="transition-all hover:text-[#ffc639]">
                    Prev
            </button>
            <p>
                {page} of {lastPage || '?'}
            </p>
            <button 
                onClick={handleNextPage}
                disabled={page >= lastPage}// untuk menonaktifkan (disable) tombol next jika sudah sampai page terakhir
                className="transition-all hover:text-[#ffc639]">
                    Next
            </button>
        </div>
    )
}

export default Pagination