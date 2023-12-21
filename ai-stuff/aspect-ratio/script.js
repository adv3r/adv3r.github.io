function calculateAspectRatio() {
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;

    if (width && height) {
        var gcd = function (a, b) {
            return (b === 0) ? a : gcd(b, a % b);
        };

        var aspectRatio = (width / gcd(width, height)) + ":" + (height / gcd(width, height));
        document.getElementById('result').innerText = 'Aspect Ratio: ' + aspectRatio;

        var imagePreview = document.getElementById('image-preview');
        imagePreview.style.display = 'block';
        imagePreview.style.paddingBottom = (height / width * 100) + '%';
    } else {
        document.getElementById('result').innerText = 'Please enter both width and height values.';

        document.getElementById('image-preview').style.display = 'none';
    }
}
