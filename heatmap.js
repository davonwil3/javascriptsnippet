(function() {
    var serverEndpoint = 'http://localhost:10000/create-event';

    // Function to send data to your server
    function sendData(data) {
        try {
            fetch(serverEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

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

  
    // Add event listeners
    document.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);

})();
