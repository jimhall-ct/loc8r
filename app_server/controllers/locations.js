/* GET 'Home' page */
const homeList = function(req, res) {
    res.render('locations-list', { title: 'Home' });
};

/* GET 'Location Info' page */
const locationInfo = function(req, res) {
    res.render('location-info', { title: 'Location Info' });
};

/* GET "Add Review" page */
const addReview = function(req, res) {
    res.render('location-review-form', { title: 'Add Review' });
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};