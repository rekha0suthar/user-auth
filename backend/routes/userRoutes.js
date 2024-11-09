import { Router } from 'express';
import User from '../model/user.js';

const router = Router();

// @desc POST   Set user
router.post('/login', async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const existUser = await User.findOne({ username });
    if (existUser) {
      return res.status(201).json(existUser);
    }

    const user = new User({
      username,
      password,
      role,
    });

    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// @desc   GET user

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    if (user.role === 'admin') {
      const users = await User.find();
      res.status(200).json({ user: user, users: users });
    } else {
      res.status(200).json({ user: user });
    }
  } catch (err) {
    res.status(404).json({ message: 'User not found' });
  }
});

export default router;
