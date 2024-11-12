
// src/config/database.js
export default {
  dialect: "postgres",
  url: "postgresql://postgres:AllVUEqxjgIJdYBzkDfonJQdqeVymsoW@autorack.proxy.rlwy.net:35953/railway",
  define: {
    timestamps: true, // Corrigido para "timestamps"
    underscored: true,
    underscoredAll: true,
  },
};
