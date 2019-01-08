function twChallangeInput4() {
    var xhttp = new nod - XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var resData = this.responseText;
            console.log(this.responseText);
            var now = new Date();
            var toDate = now.valueOf();
            var totalValue = 0;
            var jsonData = JSON.parse(resData);
            jsonData.forEach(function(element) {

                var sDate = new Date(element.startDate);
                var startDate = sDate.valueOf();

                var eDate = new Date(element.endDate);
                var endDate = eDate.valueOf();

                if (toDate > startDate && (toDate < endDate || !element.endDate))
                    totalValue = totalValue + element.price;
            });
            console.log(totalValue);
            var outPutData = {
                "output": {
                    totalValue
                }
            };

            xhttp.open('POST', "https://http-hunt.thoughtworks-labs.net/challenge/output", true);
            xhttp.setRequestHeader("userId", "V0JhH4HUn");
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(outPutData));
        }
    };
    xhttp.open('GET', "https://http-hunt.thoughtworks-labs.net/challenge/input", true);
    xhttp.setRequestHeader("userId", "V0JhH4HUn");
    xhttp.send();
}