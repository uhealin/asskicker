import kNN

import matplotlib
import matplotlib.pyplot as plt
from numpy import array

dm,dl=kNN.file2matrix('datingTestSet2.txt')

fig=plt.figure()
ax=fig.add_subplot(111);
ax.scatter(dm[:,1],dm[:,2],15.0*array(dl),15.0*array(dl))
plt.show()