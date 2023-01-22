const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log(error);
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({ where: { id: cityId } });
      return true;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // The below code will not return the updated obj
      // if using postgres we can use returning true and plain text true
      // const city = await City.update(data, { where: { id: cityId } });

      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;
