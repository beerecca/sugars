var Sequelize = require('sequelize');

export class DB {
    
    constructor() {
        this.__db_connString = process.env.DATABASE_URL;
        this.__db_connOptions = {
            dialectOptions: {
                ssl: (process.env.ENVIRONMENT == 'dev')?true:false
            }
        }
    }

    
    init() {
        return new Promise((resolve, reject) => {
            console.log('DB.init: request recieved');
            //start the database connector
            this.sequelize = new Sequelize(this.__db_connString, this.__db_connOptions);
            console.log('DB.init: sequelize connceted');
           
            this.User = this.sequelize.define('user', {
                uuid: { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV1, primaryKey: true },   
                firstName: Sequelize.STRING(255),               
                lastName: Sequelize.STRING(255),
                authLoginType: Sequelize.STRING(32),
                //dailyLongActingUnits: Sequelize.DECIMAL(8, 3),
                unitType: Sequelize.STRING(32),
                glLow: Sequelize.DECIMAL(8,3),                  //low range on Glucose Level (in unitType)
                glHigh: Sequelize.DECIMAL(8,3),                 //high range of Glucose Level (in unitType)
                carbsPerUnit: Sequelize.DECIMAL(8,3),    
                godMode: Sequelize.BOOLEAN,

                //Auth implementations for later use
                authEmail: Sequelize.STRING(255),
                authFacebook: Sequelize.STRING(255),
                authGoogle: Sequelize.STRING(255),
                authOAuth: Sequelize.STRING(255)
            });
            console.log('DB.init: User type created');

            this.Food = this.sequelize.define('food', {
                name: Sequelize.STRING(255),                    //Name              e.g. Pizza
                unit: Sequelize.STRING(255),                    //Unit type,        e.g. Slice
                carbs: Sequelize.INTEGER,                       //Carbs per unit    e.g. 30
                defaultAmount: Sequelize.INTEGER                //Default           e.g. 1 (as in one slice)
            });
            console.log('DB.init: Food type created');

            this.Entry = this.sequelize.define('entry', {
                entryDate: Sequelize.DATE,
                glucoseLevel: Sequelize.DECIMAL(8,3),
                exerciseCarbs: Sequelize.DECIMAL(8,3),
                insulinShort: Sequelize.INTEGER
            });
            console.log('DB.init: Entry type created');

            this.FoodEntry = this.sequelize.define('foodEntry', {
                quantity: Sequelize.STRING(255),
                carbs: Sequelize.INTEGER
            });
            console.log('DB.init: FoodEntry type created');

            this.User.hasMany(this.Entry, { as: 'Entries'});
            this.User.hasMany(this.Food, { as: 'Foods' });

            this.Food.belongsToMany(this.Entry, { as: "Entries", through: this.FoodEntry });
            this.Entry.belongsToMany(this.Food, { as: "Foods", through: this.FoodEntry });
            console.log('DB.init: Relationships defined. Schema defined');

            this.sequelize.sync().then(function(result) {
                console.log('DB.init: Schema sync success');
                resolve('success!'); 
            }, function(err) {
                console.log('DB.init: Schema sync failed');
                reject(err);
            });
            
        });   
    }
}

