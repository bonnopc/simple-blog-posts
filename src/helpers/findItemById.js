export default function findItemById(id,dataset=[],key="id"){
    if(id){
        const filteredList = dataset.filter(data => data[key] === id)

        if(filteredList.length) return filteredList[0]
    }

    return;
}