import mongoose from 'mongoose';
import { PlayerSchema } from '../models/playerModel';

const Player = mongoose.model('Player', PlayerSchema);

export const addNewPlayer = async (req, res) => {
  const newPlayer = new Player(req.body);

  try {
    const savedPlayer = await newPlayer.save();
    res.json(savedPlayer);
  } catch (error) {
    res.send(error);
  }
};

export const getAllPlayers = async (req, res) => {
  try {
    const retrievedPlayers = await Player.find({});
    res.json(retrievedPlayers);
  } catch (error) {
    res.send(error);
  }
};

export const getPlayerById = async (req, res) => {
  try {
    const retrievedPlayer = await Player.findById(req.params.playerId);
    res.json(retrievedPlayer);
  } catch (error) {
    res.send(error);
  }
};

export const updatePlayerById = async (req, res) => {
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(req.params.playerId, req.body, {
      new: true,
    });
    res.json(updatedPlayer);
  } catch (error) {
    res.send(error);
  }
};

export const deletePlayerById = async (req, res) => {
  try {
    await Player.findByIdAndRemove(req.params.playerId);
    res.json({ message: 'Successfully deleted player' });
  } catch (error) {
    res.send(error);
  }
};
