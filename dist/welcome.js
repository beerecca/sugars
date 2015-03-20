System.register(["moment"], function (_export) {
  "use strict";

  var moment, _prototypeProperties, _classCallCheck, Entry;
  return {
    setters: [function (_moment) {
      moment = _moment["default"];
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Entry = _export("Entry", (function () {
        function Entry() {
          _classCallCheck(this, Entry);

          this.heading = "New Entry";
          this.firstName = "John";
          this.lastName = "Doe";
          this.glucose = 0;
          this.carbs = 0;
          this.quantity = 0;
          this.exercise = 0;
          this.amount = 1;
        }

        _prototypeProperties(Entry, null, {
          time: {
            get: function () {
              return moment().format("dddd, Do MMMM YYYY, h:mm a");
            },
            configurable: true
          },
          short: {
            get: function () {
              var normalAdjust = (parseInt(this.glucose) - 7) / 3,
                  foodAdjust = parseInt(this.quantity) * parseInt(this.carbs) / 10,
                  exerciseAdjust = parseInt(this.exercise),
                  calculation = Math.round((normalAdjust + foodAdjust - exerciseAdjust) * 10 / 10);

              calculation = calculation < 0 ? 0 : calculation;

              return "" + calculation;
            },
            configurable: true
          }
        });

        return Entry;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlbGNvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O01BQU8sTUFBTSx5Q0FFQSxLQUFLOzs7QUFGWCxZQUFNOzs7Ozs7O0FBRUEsV0FBSztBQUNMLGlCQURBLEtBQUs7Z0NBQUwsS0FBSzs7QUFFZCxjQUFJLENBQUMsT0FBTyxHQUFHLFdBQVcsQ0FBQztBQUMzQixjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztBQUN0QixjQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNqQixjQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNmLGNBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2pCOzs2QkFWVSxLQUFLO0FBWVosY0FBSTtpQkFBQSxZQUFFO0FBQ1IscUJBQU8sTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDdEQ7OztBQUVHLGVBQUs7aUJBQUEsWUFBRTtBQUNULGtCQUFJLFlBQVksR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBLEdBQUksQ0FBQztrQkFDL0MsVUFBVSxHQUFHLEFBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFJLEVBQUU7a0JBQ2xFLGNBQWMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztrQkFDeEMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQUFBQyxDQUFDLFlBQVksR0FBRyxVQUFVLEdBQUcsY0FBYyxDQUFBLEdBQUksRUFBRSxHQUFJLEVBQUUsQ0FBQyxDQUFDOztBQUVuRix5QkFBVyxHQUFHLEFBQUMsV0FBVyxHQUFHLENBQUMsR0FBSSxDQUFDLEdBQUcsV0FBVyxDQUFDOztBQUV0RCwwQkFBVSxXQUFXLENBQUc7YUFDekI7Ozs7O2VBekJVLEtBQUsiLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9