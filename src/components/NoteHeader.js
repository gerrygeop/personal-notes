function NoteHeader({search, onSearch}) {
   return (
      <div className="note__header">
         <h1>👾Notes</h1>
         <input 
            type="search" 
            placeholder="Cari catatan..." 
            value={search} 
            onChange={(query) => onSearch(query.target.value)}
         />
      </div>
   )
}

export default NoteHeader;