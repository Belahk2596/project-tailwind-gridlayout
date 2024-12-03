import GridColumn from "./Gridcolumn"
export default function Grid () {
    return (
        <div className="grid grid-cols-4 gap-1.5 h-fit">
          <GridColumn />
          <GridColumn />
          <GridColumn />
          <GridColumn />
        </div>
    )
}