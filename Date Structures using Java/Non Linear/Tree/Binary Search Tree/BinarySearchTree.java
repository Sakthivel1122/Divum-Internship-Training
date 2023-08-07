class Node {
    Node left;
    int data;
    Node right;

    Node(int data) {
        this.data = data;
        left = null;
        right = null;
    }

}

public class BinarySearchTree {
    Node root = null;

    public void insertNode(Node root, int data) {
        if (root == null) {
            this.root = new Node(data);
            return;
        }
        if (data < root.data) {
            if (root.left == null) {
                root.left = new Node(data);
            } else {
                insertNode(root.left, data);
            }
        } else if (data > root.data) {
            if (root.right == null) {
                root.right = new Node(data);
            } else {
                insertNode(root.right, data);
            }
        }
    }

    public void inOrderTraversal(Node root) {
        if (root == null)
            return;
        inOrderTraversal(root.left);
        System.out.print(root.data + " ");
        inOrderTraversal(root.right);
    }

    public Node deleteNode(Node root, int key) {
        if (root == null)
            return root;

        if (key < root.data) {
            root.left = deleteNode(root.left, key);
            return root;
        } else if (key > root.data) {
            root.right = deleteNode(root.right, key);
            return root;
        }

        if (root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        } else {
            Node succParent = root;
            Node succ = root.right;

            while (succ.left != null) {
                succParent = succ;
                succ = succ.left;
            }

            if (succParent != root)
                succParent.left = succ.right;
            else
                succParent.right = succ.right;

            root.data = succ.data;
            return root;
        }
    }

    public static void main(String[] args) {
        BinarySearchTree tree = new BinarySearchTree();

        tree.insertNode(tree.root, 10);
        tree.insertNode(tree.root, 5);
        tree.insertNode(tree.root, 20);
        tree.insertNode(tree.root, 3);
        tree.insertNode(tree.root, 8);
        tree.insertNode(tree.root, 7);
        tree.insertNode(tree.root, 9);
        tree.insertNode(tree.root, 15);

        tree.inOrderTraversal(tree.root);
        System.out.println();

        tree.root = tree.deleteNode(tree.root, 5);

        tree.inOrderTraversal(tree.root);
    }
}
