(function() {

  var numbers = [];
  for (var i=0; i<1000; i++) numbers.push(i);

  JSLitmus.test('add', function() {
    var ds = baseSample();
    _.each(numbers, function(num){ 
      ds.add({ one: 45, two: num});
    });
    return ds;
  });

  JSLitmus.test('add with view', function() {
    var ds = baseSample();
    var view = ds.column('one');
    _.each(numbers, function(num){ 
      ds.add({ one: 45, two: num});
    });
    return ds;
  });

  JSLitmus.test('add with 5 views', function() {
    var ds = baseSample();
    var views = [];
    _(5).times(function() { 
      views.push( ds.column('one') );
    });

    _.each(numbers, function(num){ 
      ds.add({ one: 45, two: num});
    });
    return ds;
  });

  JSLitmus.test('add + remove with view', function() {
    var ds = baseSample();
    var view = ds.column('one');
    _.each(numbers, function(num){ 
      ds.add({ one: 45, two: num});
      ds.remove(ds._rowIdByPosition[0]);
    });
    return ds;
  });

  JSLitmus.test('update', function() {
    var ds = baseSample();
    _.each(numbers, function(num){ 
      ds.update(ds._rowIdByPosition[0], { one: num });
    });
    return ds;
  });

  JSLitmus.test('update with view', function() {
    var ds = baseSample();
    var view = ds.column('one');
    _.each(numbers, function(num){ 
      ds.update(ds._rowIdByPosition[0], { one: num });
    });
    return ds;
  });



})();
