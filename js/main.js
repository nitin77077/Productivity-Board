import KanbanAPI from "./api/KanbanAPI.js"
import Kanban from "./view/Kanban.js"
import DropZone from "./view/DropZone.js"

new Kanban(
    document.querySelector(".kanban")
)

//console.log(KanbanAPI.getItems(1))

//console.log(DropZone.createDropZone())
