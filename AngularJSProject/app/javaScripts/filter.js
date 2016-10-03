angular.module("songkangApp")
    .filter("internshipSearch", function() {
        return function(data, search) {
            var searchedData = [];
            console.log("data : ", data);
            console.log("search : ",search);
            for(var i=0; i<data.length; i++)
            {
                console.log(data[i]);
                if(data[i].initials != undefined && data[i].initials.search(search) >-1) {
                    searchedData.push(data[i]);
                    console.log("Find " + data[i]);
                }
            }
            console.log("SEARCHED DATA");
            console.log(searchedData);
            return searchedData;
        };
    });