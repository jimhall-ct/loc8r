/* GET 'Home' page */
const homeList = function(req, res) {
    res.render('index', { title: 'Home' });
};

/* GET 'Location Info' page */
const locationInfo = function(req, res) {
    res.render('index', { title: 'Location Info' });
};

/* GET "Add Review" page */
const addReview = function(req, res) {
    res.render('index', { title: 'Add Review' });
};

module.exports = {
    homeList,
    locationInfo,
    addReview
};