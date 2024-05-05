(function() {
    var serverEndpoint = 'http://localhost:10000/create-event';

    // Function to send data to your server
    function sendData(data) {
        try {
            fetch(serverEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    // Function to handle click events
    function handleClick(event) {
        var eventData = {
            type: 'click',
            timestamp: new Date().getTime(),
            x: event.clientX,
            y: event.clientY,
            url: window.location.href
        };
        sendData(eventData);
    }

    // Function to handle mouse move events for heatmap data
    function handleMouseMove(event) {
        var eventData = {
            type: 'mousemove',
            timestamp: new Date().getTime(),
            x: event.clientX,
            y: event.clientY,
            url: window.location.href
        };
        // Throttle the number of mousemove events sent to the server
        if (!window.lastMouseMoveTime || new Date().getTime() - window.lastMouseMoveTime > 100) {
            sendData(eventData);
            window.lastMouseMoveTime = new Date().getTime();
        }
    }

    // Add event listeners
    document.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);

})();
